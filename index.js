const removeEmoji = str => str.replace(/(?![*#0-9]+)[\p{Emoji}\p{Emoji_Modifier}\p{Emoji_Component}\p{Emoji_Modifier_Base}\p{Emoji_Presentation}]|Ⓐ|☭|✯|✙|ᛋ|卐|卍|࿕|࿖|࿗|࿘|ꖦ|☫|☤|❥|웃|유|☏|♚|▲|⚤|☒|♛|▼|♫|⌘|¡|♡|ღ|ツ|☼|❅|✎|✪|➳|✞|✿|✄|✫|★|/gu, '');

export default removeEmoji;
