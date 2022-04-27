import { delimeterMsg, logF, logToHTML } from "./utils";

function gitAdvancedSnippets() {
  logToHTML(`
    Some advanced git tricks and snippets are:

    - via the package manager, e.g. "apt install nginx"
    - build from sources.
    `);
}

export default function gitTricks() {
  delimeterMsg('GIT TRICKS');
  logF(gitAdvancedSnippets);
}