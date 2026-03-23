---
name: article
description: Add a new article to the portfolio articles page following the existing pattern. Usage: /article @image <article_hosted_url> <navigation_url>
user_invocable: true
arguments:
  - name: args
    description: "@image_file <article_hosted_url> <navigation_url>"
    required: true
---

# Article Skill

You are adding a new article to the portfolio website's articles page.

## Input Format

The user provides: `@image <article_hosted_url> <navigation_url>`

- **@image**: An image file reference (will be used as the article thumbnail). The image should be placed in `public/images/articles/`.
- **article_hosted_url**: The URL where the article content is hosted (e.g., a GitHub repo or blog post). Use this to determine the article's **title** and **summary** by fetching/reading the content.
- **navigation_url**: The URL users will navigate to when clicking the article in the portfolio.

## Steps

1. **Parse the arguments**: Extract the image reference, article hosted URL, and navigation URL from the args.

2. **Fetch article content**: Use `WebFetch` to visit the `<article_hosted_url>` and read the content. From the content, determine:
   - A concise **title** for the article (short, descriptive — similar style to existing titles like "How to Configure Seq in Golang Application")
   - A **summary** (2-3 sentences describing the article's value — similar to existing summaries)
   - An estimated **reading time** (e.g., "5 min read")

3. **Copy/verify the image**: If the image is not already in `public/images/articles/`, copy it there. Note the filename.

4. **Edit `src/pages/articles.js`**: Follow the existing pattern exactly:

   a. **Add an import** for the new article image at the top of the file, following the existing pattern:
      ```javascript
      import articleN from "../../public/images/articles/your-image-filename.ext";
      ```
      Use the next available article number (check existing imports like `article1`, `article2`, etc.).

   b. **Add a `<FeaturedArticles>` entry** inside the `<ul>` grid (after the last existing `<FeaturedArticles>`):
      ```jsx
      <FeaturedArticles
        title="Article title derived from content"
        summary="2-3 sentence summary derived from content"
        time="X min read"
        link={"<navigation_url>"}
        img={articleN}
      />
      ```

   c. **Add an `<Articles>` entry** inside the "All Articles" `<ul>` (after the last existing `<Articles>`):
      ```jsx
      <Articles
        title={"Full summary/description of the article"}
        date={"<today's date in 'Month Day, Year' format>"}
        link={"<navigation_url>"}
        img={articleN}
      />
      ```

5. **Verify**: Read back the modified file to ensure the changes are correct and follow the existing code style.

## Important Notes

- Use the **navigation_url** (not the hosted URL) as the `link` prop in both components.
- The `title` in `<Articles>` (All Articles section) should be the full summary/description text, matching the existing pattern where titles there are longer descriptive texts.
- The `title` in `<FeaturedArticles>` should be a shorter, concise title.
- Use today's date for the `date` prop in the `<Articles>` component.
- Maintain consistent code style (indentation, string quoting, etc.) with the existing entries.
