import { CONFIG } from './config'

export const WORDS = [
'hello',
'three',
'pants',
'plant',
'ringo',
'nubia',
'smart',
'water',
'norms',
'array',
'floor',
'words',
'check',
'works',
'paste',
'signs',
'hands',
'story',
'valid',
'guess',
'waste',
'haste',
'shirt',
'shoes',
'rings',
'glass',
'class',
'smack',
'slaps',
'teeth',
'noses',
'beast',
'skill',
'block',
'zebra',
'sloth',
'tiger',
'birds',
'white',
'black',
'brown',
'pinks',
'kicks',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
