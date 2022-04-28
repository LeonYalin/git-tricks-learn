import { delimeterMsg, logF, logToHTML } from "./utils";

function gitAdvancedSnippets() {
  logToHTML(`
    Some advanced git tricks and snippets are:

    - use "git log --oneline" to view only the commit messages in the log.
    - to change (amend) the last commit, change the code, then use "git commit -a --amend --no-edit". Use "git commit --amend -m "new message" co change the commit message.
    - 

    Interactive rebase
    - use "git rebase -i HEAD~3" to rebase 3 commits back
    - from there, we'll have a list of commits with the command on the left and the message on the right.
    - we can do various actions, such as squash, reword(efit commit message), edit commit code, delete ect...
    - to do this, we change the command on the left, then save & exit the editor. After, the editor will be opened once again with the required actions.
    `);
}

export default function gitTricks() {
  delimeterMsg('GIT TRICKS');
  logF(gitAdvancedSnippets);
}