import {motion} from 'framer-motion';

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center relative overflow-hidden">
            <div className="fixed top-0 -z-10 h-full w-full bg-slate-950">
                <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            </div>
            <motion.div
                className="w-16 h-16 border-4 border-t-4 border-t-blue-500 border-blue-200 rounded-full"
                animate={{rotate: 360}}
                transition={{duration: 1, repeat: Infinity, ease: 'linear'}}
            />
        </div>
    );
};

export default LoadingSpinner;
