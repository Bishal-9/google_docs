import Button from '@material-tailwind/react/Button'
import Image from 'next/image'
import { signIn } from 'next-auth/client'

function Login() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <Image
                src='https://www.businessinsider.in/thumb.cms?msid=82078883&width=1200&height=900'
                height='300'
                width='550'
                objectFit='contain'
            />
            <Button
                className='w-44 mt-10'
                color='blue'
                buttonType='filled'
                onClick={signIn}
            >
                Login
            </Button>
        </div>
    )
}

export default Login
