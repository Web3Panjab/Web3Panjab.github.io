import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="">
            <Image
                alt="Web3Panjab"
                src="/images/WEB3Panjab_logo_2.png"
                height={120}
                width={120}
                className="object-cover border-4 border-white rounded-full shadow-md"
            />
        </div>
    );
};

export default ProfilePic;
