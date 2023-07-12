const tasks = [
  {
    id: 1,
    scenario: 'Create a new branch named "feature" and switch to it.',
    command: "git checkout -b feature",
    hint: "Use the command `git checkout -b` to create and switch to a new branch.",
  },
  {
    id: 2,
    scenario: "Check the status of your repository and view the changes.",
    command: "git status",
    hint: "Use the command `git status` to see the current status of your repository and view any changes made.",
  },
  {
    id: 3,
    scenario: 'Add all changes and commit with the message "Initial commit."',
    command: 'git add . && git commit -m "Initial commit"',
    hint: "Use the commands `git add .` and `git commit -m` to stage and commit changes.",
  },
  {
    id: 4,
    scenario: "Push the changes to the remote repository.",
    command: "git push origin feature",
    hint: "Use the command `git push` to push the changes to the remote repository.",
  },
  {
    id: 5,
    scenario: 'Switch back to the "main" branch.',
    command: "git checkout main",
    hint: "Use the command `git checkout` to switch to the main branch.",
  },
  {
    id: 6,
    scenario: "View the commit history with a detailed summary.",
    command: "git log",
    hint: "Use the command `git log` to view the commit history in detail.",
  },
  {
    id: 7,
    scenario: "Fetch the latest changes from a remote repository.",
    command: "git fetch",
    hint: "Use the command `git fetch` to retrieve the latest changes from the remote repository without merging them.",
  },
  {
    id: 8,
    scenario: 'Merge the "feature" branch into the "main" branch.',
    command: "git merge feature",
    hint: "Use the command `git merge` to merge the changes from the 'feature' branch into the 'main' branch.",
  },
  {
    id: 9,
    scenario: 'Rebase the current branch onto the "master" branch.',
    command: "git rebase master",
    hint: "Use the command `git rebase` followed by the branch name to move the current branch's commits onto the tip of the specified branch.",
  },
  {
    id: 10,
    scenario: 'Remove a branch named "feature" (locally).',
    command: "git branch -d feature",
    hint: "Use the command `git branch -d` followed by the branch name to delete the specified branch (if it has been merged).",
  },
  {
    id: 11,
    scenario: 'Remove a branch named "feature" (remotely).',
    command: "git push origin --delete feature",
    hint: "Use the command `git push origin --delete` followed by the branch name to delete the specified branch from the remote repository.",
  },
  {
    id: 12,
    scenario: 'Create a new branch named "release" from a specific commit.',
    command: "git branch release <commit>",
    hint: "Use the command `git branch` followed by the branch name and the commit hash to create a new branch at the specified commit.",
  },
  {
    id: 13,
    scenario: "Push the changes to the remote repository.",
    command: "git push origin main",
    hint: "Use the command `git push` to push the changes to the remote repository.",
  },
  {
    id: 14,
    scenario: "Synchronize your local repository with the remote repository.",
    command: "git pull",
    hint: "Use the command `git pull` to fetch the latest changes from the remote repository and merge them with your local repository.",
  },
  {
    id: 15,
    scenario:
      "View the differences between the working directory and the last commit.",
    command: "git diff",
    hint: "Use the command `git diff` to see the differences between the current state of the files in your working directory and the last commit.",
  },
];

export default tasks;

/* 
Answers:

1. git checkout -b feature
2. git status
3. git add . && git commit -m "Initial commit"
4. git push origin feature
5. git checkout main
6. git log
7. git fetch
8. git merge feature
9. git rebase master
10. git branch -d feature
11. git push origin --delete feature
12. git branch release <commit>
13. git push origin main
14. git pull
15. git diff

*/
