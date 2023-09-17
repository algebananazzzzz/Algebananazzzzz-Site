import * as React from 'react';

const A = ({ to, children }) => {
    return <a href={to} className="text-blue-600 decoration-2 hover:underline font-medium" target="blank">{children}</a>
}

export default A