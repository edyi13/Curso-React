import { useState } from "react";
type Props ={
    formatUserName: (userName: string) => string;
    userName: string;
    children?: React.ReactNode;
}
//children is a special prop and this children can be of any type is required
export const TwitterFollowCard: React.FC<Props> = ({formatUserName,userName, children}) => {
    const [ isFollowing, setIsFollowing ] = useState(false)


    const imageSrc = `https://unavatar.io/twitter/${ userName }`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" alt="avatar twitter" src={imageSrc}/>
        <div className="tw-followCard-info">
            <strong>{ children }</strong>
            <span className="tw-followCard-infoUserName">{formatUserName(userName) }</span>
        </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick ={handleClick}>
               <span className="tw-followCard-text">{ text }</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}