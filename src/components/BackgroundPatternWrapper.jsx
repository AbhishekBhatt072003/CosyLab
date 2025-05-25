import React from 'react';

const PageBackgroundWrapper = ({ children }) => {
    return (
        <div className="relative min-h-screen">
            {/* Background Pattern - Fixed to viewport */}
            <div className="fixed inset-0 opacity-30 pointer-events-none z-0">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(142,43,63,0.1)' stroke-width='0.5'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`,
                        backgroundAttachment: 'fixed'
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default PageBackgroundWrapper;