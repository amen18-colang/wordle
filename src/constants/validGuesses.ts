import { CONFIG } from './config'

export const VALIDGUESSES = [
'hello',
'three',
'pants',
'plant',
'ringo',
'george',
'smart',
'water',
'normal',
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
'cinder',
'block',
'zebra',
'sloth',
'tiger',
'birds'
'white',
'black',
'brown',
'pinks',
'kicks'
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
