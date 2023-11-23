# How to deploy your own website (on GitHub pages) 
1. Fork this repository.
2. Open `_config.yml`.
   1. Update `url` field according to your GitHub account (e.g., `https://<your-github-username>.github.io/`).
   2. Update `baseurl` field according to your reporsitory's name (e.g., `/cs101`).
   3. Commit and push your changes.
3. Go to your repository's settigns (`https://github.com/<your-github-username>/<your-repo-name>/settings`).
4. On GitHub Pages section, choose source to be your master branch, and enable Github Pages.
5. You are now ready to go! Start customizing your website.


# How to test your website locally
1. Install Jekyll ([Installation guide](https://jekyllrb.com/docs/installation/))
2. Clone your repo
3. Watch your website while editing: `bundle exec jekyll serve`

# How to customize
## Changing the names
- Open `_config.yml`
- Update `course_name`, `course_semester`, and `course_description` (this will appear in the home page).
- Update `schoolname`, `schoolurl`, `twitter_username`, and `address` accordingly.
- (Optional) Enter your Google Analytics tracking ID in the `google_analytics` field (Remember to uncomment it).
- Add more content to your home page: Update `index.md` (it supports Markdown!)
- Update course staff info at `_data/people.yml` (You may need to upload the profile pics to `_images` folder.
- (Optional) Open `_data/previous_offering.yml` and update the data if needed.



# Acknowledgement 
This template is heavily based on [svmiller / course-website](https://github.com/svmiller/course-website).
