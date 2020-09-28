# How to update template code base

The intention of this guide is to provide a safe way to keep the base code
updated (packages, configurations and any other stuff)

## Instructions

1. Add template remote to git. This step is not required if you already added
   the remote URL

```zsh
git remote add template git@github.com:NicoCevallos/sapper-template-rollup.git
```

2. Fetch template branches

```zsh
git fetch template
```

3. Move to template master branch once and then as orphan to erase history and
   don't get any stuff from your branch

```zsh
git checkout template/master && git checkout --orphan template/master
```

4. Create `template-master` branch to save updated template

```zsh
git checkout -B template-master
```

5. Sort `package.json` file to easily compare new changes in the file. This step
   would be deleted in the future if the changes applied in the previous step
   add new packages in an organized way.

```zsh
npx sort-package-json
```

6. Save updated template

```zsh
git add . && git commit -m "updated template"
```

7. Rebase to `master` to join changes to the history

```zsh
git rebase master
```

8. Finally checkout to your branch and merge changes (example using master)

```zsh
git checkout <your-branch> && git merge template-master
```

9. And delete temporary branch after resolve your conflicts

```zsh
git merge template-master
```
