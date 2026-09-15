import React from 'react'
import MinecraftButton from './minecraft_button';

const NavigateButton = ({ text, onClick, isShown }: { text: string, onClick: () => void, isShown: boolean }) => {
    return (
        isShown ? <MinecraftButton onClick={onClick}>{text}</MinecraftButton> : <></>
    );
}

const Pagination = ({currentPage, maxPage, onPrevious, onNext} : {currentPage : number, maxPage : number, onPrevious : () => void, onNext : () => void}) => {
    return (
        <div className="grid grid-cols-3 items-center">
            <div className="justify-self-start">
                <NavigateButton text="<" isShown={currentPage > 0} onClick={
                    onPrevious
                } />
            </div>
            <div className="paginationText justify-self-center">{`${currentPage + 1} / ${maxPage}`}</div>
            <div className="justify-self-end">
                <NavigateButton text=">" isShown={currentPage + 1 != maxPage} onClick={
                    onNext
                } />
            </div>
        </div>
    )
}

export default Pagination
