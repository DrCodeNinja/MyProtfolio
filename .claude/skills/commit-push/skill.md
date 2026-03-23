---
name: commit-push
description: Commit all staged and unstaged changes and push to origin. Usage: /commit-push [optional commit message]
user_invocable: true
arguments:
  - name: args
    description: "Optional commit message. If not provided, one will be generated from the changes."
    required: false
---

# Commit and Push Skill

You are committing the current changes and pushing them to the remote origin.

## Steps

1. **Check current state**: Run the following commands in parallel:
   - `git status` to see all modified and untracked files (never use `-uall` flag)
   - `git diff` to see both staged and unstaged changes
   - `git log --oneline -5` to see recent commit message style

2. **Validate there are changes**: If there are no modified or untracked files, inform the user that there is nothing to commit and stop.

3. **Stage files**: Add all relevant changed and untracked files to the staging area. Use specific file paths rather than `git add -A` or `git add .`. Do NOT stage files that likely contain secrets (`.env`, `credentials.json`, etc.) — warn the user if such files are detected.

4. **Generate commit message**: If the user provided a commit message in the arguments, use that. Otherwise, analyze the staged changes and generate a concise commit message that:
   - Summarizes the nature of the changes (new feature, bug fix, enhancement, etc.)
   - Focuses on the "why" rather than the "what"
   - Follows the style of recent commits in the repository
   - Is 1-2 sentences maximum

5. **Commit**: Create the commit using a HEREDOC format:
   ```bash
   git commit -m "$(cat <<'EOF'
   Your commit message here

   Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
   EOF
   )"
   ```

6. **Push to origin**: Run `git push origin <current-branch>` to push the commit to the remote.

7. **Verify**: Run `git status` after pushing to confirm everything is clean and up to date with the remote.

## Important Notes

- Always append the `Co-Authored-By` trailer to the commit message.
- Never use `--force` or `--no-verify` flags.
- Never amend existing commits — always create new ones.
- If a pre-commit hook fails, fix the issue and create a new commit (do not use `--amend`).
- If the push fails (e.g., remote has new commits), inform the user and suggest pulling first rather than force-pushing.
- Do not stage files matching `.env*`, `credentials*`, `*.pem`, `*.key`, or other secret patterns.
