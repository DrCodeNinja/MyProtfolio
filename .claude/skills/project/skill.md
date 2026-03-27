---
name: project
description: Add a new project to the portfolio projects page. Usage: /project @image <project_readme_url> <navigation_url>
user_invocable: true
arguments:
  - name: args
    description: "@image_file <project_readme_url> <navigation_url>"
    required: true
---

# Project Skill

You are adding a new project to the portfolio website's projects page.

## Input Format

The user provides: `@image <project_readme_url> <navigation_url>`

- **@image**: An image file reference (will be used as the project thumbnail). The image should be placed in `public/images/projects/`.
- **project_readme_url**: The URL where the project content/README is hosted (e.g., a GitHub repo README). Use this to investigate the project and determine the **title**, **summary**, and **type**.
- **navigation_url**: The URL users will navigate to when clicking the project. This URL is used for both the `link` and `github` props.

## Steps

1. **Parse the arguments**: Extract the image reference, project README URL, and navigation URL from the args.

2. **Fetch project content**: Use `WebFetch` to visit the `<project_readme_url>` and read the content. From the content, determine:
   - A concise **title** for the project (short, descriptive — similar style to existing titles like "Promptopia AI Prompting Application", "Restaurent Application")
   - A **summary** (2-3 sentences describing what the project does and its key features — similar to existing summaries)
   - A **type** label (e.g., "NextJS Project", "ReactJS Project", "Go Project", ".NET Project", "Featured Project" — infer from the tech stack found in the README)

3. **Ask the user**: Present the generated title, summary, and type to the user and ask:
   - Whether they want a **FeaturedProject** (full-width with summary) or a **Project** (half-width grid item)
   - Whether the title, summary, and type look good or need changes

4. **Copy/verify the image**: If the image is not already in `public/images/projects/`, copy it there. Note the filename.

5. **Edit `src/pages/projects.js`**: Follow the existing pattern exactly:

   a. **Add an import** for the new project image at the top of the file, following the existing pattern:
      ```javascript
      import projectNameImg from "../../public/images/projects/your-image-filename.ext";
      ```
      Use a descriptive variable name based on the project (e.g., `aspireProjectImg`, `goCrudImg`).

   b. **Add the project entry** inside the grid `<div>`, after the last existing project entry:

      For **FeaturedProject** (full-width):
      ```jsx
      <div className="col-span-12">
        <FeaturedProject
          title="Project title derived from README"
          summary="2-3 sentence summary derived from README"
          link={"<navigation_url>"}
          github={"<navigation_url>"}
          type={"Tech Stack Project"}
          img={projectNameImg}
        />
      </div>
      ```

      For **Project** (half-width grid):
      ```jsx
      <div className="col-span-6 sm:col-span-12">
        <Project
          title="Project title derived from README"
          link={"<navigation_url>"}
          github={"<navigation_url>"}
          type={"Tech Stack Project"}
          img={projectNameImg}
        />
      </div>
      ```

6. **Verify**: Read back the modified file to ensure the changes are correct and follow the existing code style.

## Important Notes

- Use the **navigation_url** for both `link` and `github` props.
- For `FeaturedProject`, include the `summary` prop. For `Project`, the `summary` prop is optional (existing code includes it but it's not rendered in the component).
- The `type` should reflect the primary technology (e.g., "NextJS Project", "ReactJS Project", "Go Project", ".NET Project", "Python Project").
- Maintain consistent code style (indentation, string quoting, etc.) with the existing entries.
- Place the new project entry logically — FeaturedProjects at `col-span-12`, regular Projects at `col-span-6 sm:col-span-12`.
