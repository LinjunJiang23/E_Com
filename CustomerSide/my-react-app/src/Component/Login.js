import { setState } from 'react';


const [pw, setPassword] = useState(0);
const [username, setUserName] = useUserName('M');
export default function Login({pw, username}) {
	if (Authenticate(pw, username))
	{
		
	}
	else
	{
		return (
			
		);
	}	

}

function Authenticate({pw, username}) {
	
}