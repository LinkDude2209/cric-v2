import { TextScramble } from "@/components/ui/scramble-text";

export function TextScrambleCustomCharacterDuration() {
    return (
        <TextScramble
            className='font-mono text-sm text-white'
            duration={1.2}
            characterSet='. '
        >
            Pearsonalised sports coaching at your fingertips.
        </TextScramble>
    );
}
