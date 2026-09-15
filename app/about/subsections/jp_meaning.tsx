import Subsection from '@/app/components/subsection'
import React from 'react'
import LetterCard, { LetterMeaning } from '../components/letter_card';
import { Constants } from '@/app/constants';
import about from '@/data/about.json';

const letters: LetterMeaning[] = about.jpMeaning;

const JPMeaning = () => {
    return (
        <Subsection header="JP MEANING" id={Constants.MEANING}>
            <div className="p-10 flex flex-col flex_wrap sm:grid sm:grid-cols-3">
                {letters.map(letter => <LetterCard key={letter.letter} letter={letter} />)}
            </div>
        </Subsection>
    )
}

export default JPMeaning
