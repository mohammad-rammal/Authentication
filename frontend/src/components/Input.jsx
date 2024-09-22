import {Eye, EyeOff} from 'lucide-react';

const Input = ({icon: Icon, type, showPassword, togglePasswordVisibility, ...props}) => {
    return (
        <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon className="size-5 text-blue-500" />
            </div>
            <input
                type={type}
                {...props}
                className="w-full pl-10 pr-10 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-200"
            />
            {props.placeholder === 'Your Password' && (
                <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3  "
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? (
                        <EyeOff className="size-5 text-blue-500" />
                    ) : (
                        <Eye className="size-5 text-blue-500" />
                    )}
                </div>
            )}
        </div>
    );
};
export default Input;
