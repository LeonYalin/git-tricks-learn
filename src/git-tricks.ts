import { delimeterMsg, logF, logToHTML } from "./utils";

function gitAdvancedSnippets() {
  logToHTML(`
    Some advanced git tricks and snippets are:

    - use "git log --oneline" to view only the commit messages in the log.
    - to change (amend) the last commit, change the code, then use "git commit -a --amend --no-edit". Use -m "new message" co change the commit message.
    - use "git reset --hard HEAD~1" to reset the branch one commit back
    
    Interactive rebase
    - use "git rebase -i HEAD~3" to rebase 3 commits back
    - from there, we'll have a list of commits with the command on the left and the message on the right.
    - we can do various actions, such as squash, reword(efit commit message), edit commit code, delete ect...
    - to do this, we change the command on the left, then save & exit the editor. After, the editor will be opened once again with the required actions.

    Example:
    pick 6486bea squash: add a second row
    pick 55e7053 add text

    # Rebase 7dddc12..55e7053 onto 7dddc12 (2 commands)
    #
    # Commands:
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    # d, drop = remove commit

    Reflog (the history of the HEAD pointer movement - a.k.a actions history)
    - use it to recover deleted commits and branches
    - use "git reflog" and copy the id of the delete commit action to checkout/reset hard/create a branch from this point
    - use "git reflog" and copy the id of the action before deleting the branch, then create a branch from this point

    Submodules
    - use git submodules to add external repositories to the project. Useful for 3rd party tools that we'll want to build/compile/use
    - use "git submodule add git_url" to add a submodule inside our repo.
    - this action will also add a .gitmodules file containing add the info about the submodules in the project. This will also update the .git/config file as well.
    - initially, when cloning a project the submodules folders are empty. To pull the modules code, use "git submodule update --init --recursive"
    - alternatively, use "git clone -recurse-submodules git_url" to seed the submodules when cloning the repo

    Search & Filter
    - use "git log --after="2021-7-1" --before="2021-7-5" to filter by dates
    - use "git log --author="lyalin" to search by author
    - use "git log --grep="my message" to search by words
    - use "git log -- filename.ext" to show all changes for a specific file
    - use "git log fist_branch..second_branch" to view commits that present in second_branch but not in first_branch
    `);
}

export default function gitTricks() {
  delimeterMsg('GIT TRICKS');
  logF(gitAdvancedSnippets);
}