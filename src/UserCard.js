import './UserCard.css'
function UserCard(props){
    return(
        <div className="user-card">
            <h2 className="user-name">{props.name}</h2>
            <p className="user-details">{props.age}</p>
            <p className="user-details">{props.hobby}</p>
        </div>
    );
}

export default UserCard;