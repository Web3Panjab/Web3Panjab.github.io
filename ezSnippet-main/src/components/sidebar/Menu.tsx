import { FC } from 'react';
import {
    Code,
    Flame,
    Github,
    Twitter,
    Home,
    Image as ImageIcon,
    Instagram,
    Layers,
    Linkedin,
    Scissors,
    Share2,
    ShoppingCart,
    Ticket,
    Video,
    X,
    Youtube,
} from 'lucide-react';
import List from '../ui/List';
import { useMenu } from '../Provider';

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
    const { showMenuVisibility } = useMenu();
    return (
        <div
            className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
            onClick={() => showMenuVisibility(false)}
        >
            <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
                <X className={`text-primary`} />
            </div>
            {/* List 1 */}
            <List link="/" effect="slideUp">
                <Home /> Home
            </List>
            <List link="/" effect="slideUp">
                <Flame /> Trending
            </List>
            <List link="/" effect="slideUp">
                <Code /> Snippets
            </List>
            <List link="https://www.twitter.com/Web3Panjab/" effect="slideUp">
                <Twitter /> Twitter
            </List>

            {/* List 2 */}
            <div className="mt-5">Socials</div>
            <List
                target="_blank"
                link="https://twitter.com/Web3Panjab"
                effect="slideUp"
            >
                <Twitter color="#0277b5" /> Twitter
            </List>

            <List
                target="_blank"
                link="https://www.instagram.com/Web3Panjab/"
                effect="slideUp"
            >
                <Instagram color="#b5179e" /> Instagram
            </List>

            <List
                target="_blank"
                link="https://www.linkedin.com/in/web3panjab/"
                effect="slideUp"
            >
                <Linkedin color="#0277b5" /> Linkedin
            </List>

            <List
                target="_blank"
                link="https://github.com/Web3Panjab"
                effect="slideUp"
            >
                <Github color="#2a9d8f" /> Github
            </List>
            <List
                target="_blank"
                link="https://www.twitter.com/Web3Panjab"
                effect="slideUp"
            >
                <Youtube color="#e63946" /> Youtube
            </List>
            <List
                target="_blank"
                link="https://stackoverflow.com/users/20331641/neeraj-walia"
                effect="slideUp"
            >
                <Layers color="#f77f00" /> Stack overflow
            </List>

            {/* List 3 */}
            <div className="mt-5">Projects</div>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/eCommerce"
                effect="slideUp"
            >
                <ShoppingCart /> eCommerce
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/HardhatLottery"
                effect="slideUp"
            >
                <Ticket /> Lottery
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/filetransfer-webrtc"
                effect="slideUp"
            >
                <Share2 /> File Sharing
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/dalleClone"
                effect="slideUp"
            >
                <ImageIcon /> Dalle Clone
            </List>
            <List
                target="_blank"
                link="https://snake-nwaliaez.vercel.app/"
                effect="slideUp"
            >
                <Scissors /> Ex Clone
            </List>
        </div>
    );
};

export default Menu;
