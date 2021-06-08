import { useUserContext } from '../../context/userContext'
const  HandleUserInfo = (req, res) => {
    const {user} = useUserContext();
    res.json(user);
}

export default HandleUserInfo