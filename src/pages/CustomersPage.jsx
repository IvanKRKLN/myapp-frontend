import React, { useEffect } from 'react';

export default function CustomersPage() {
    useEffect(() => {
        console.log('CustomersPage отрендерился!');
    }, []);

    return <h1 style={{ color: 'red' }}>Страница контрагентов</h1>;
}
