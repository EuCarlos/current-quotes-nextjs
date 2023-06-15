import { homepage as website, author } from "../../package.json" 

export function Footer() {
    const currentYear = new Date().getFullYear();
    const currentYearIsEquals2023 = currentYear === 2023 ? '2023' : `2023 - ${currentYear}`;

    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm">
                    Copyright © {currentYearIsEquals2023}, All Right Reserved 
                    <a href={website} className="text-gray-400 font-bold hover:text-gray-200"> {author}</a>
                </p>
            </div>
        </footer>
    );
};
