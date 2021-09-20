import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    {
        id: 1,
        label: 'Time',
        minWidth: 170,
        align: 'right',
        format: (value: Date) => value.toLocaleString('en-US'),
    },
    {
        id: 2,
        label: 'Event',
        minWidth: 170,
        align: 'right',
        format: (value: Date) => value.toLocaleString('en-US'),
    }
];

function createData(id: number, dateTime: Date, event: string) {
    return { id, dateTime, event };
}

const rows = [
    createData(1, new Date, 'event'),
    createData(2, new Date, 'event 2'),
    createData(2, new Date, 'event 2'),
    createData(2, new Date, 'event 2'),
    createData(2, new Date, 'event 2'),
    createData(2, new Date, 'event 2'),
    createData(2, new Date, 'event 2'),
    createData(2, new Date, 'event 2'),

];

export default function StickyHeadTable() {


    return (
        <table>
            <caption id="HeadersRow">Books with a Fixed Column Header Row</caption>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>ISBN-13</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Miguel De Cervantes</td>
                    <td>The Ingenious Gentleman Don Quixote of La Mancha</td>
                    <td>1605</td>
                    <td>9783125798502</td>
                </tr>
                <tr>
                    <td>Gabrielle-Suzanne Barbot de Villeneuve</td>
                    <td>La Belle et la Bête</td>
                    <td>1740</td>
                    <td>9781910880067</td>
                </tr>
                <tr>
                    <td>Sir Isaac Newton</td>
                    <td>The Method of Fluxions and Infinite Series: With Its Application to the Geometry of Curve-lines</td>
                    <td>1763</td>
                    <td>9781330454862</td>
                </tr>
                <tr>
                    <td>Mary Shelley</td>
                    <td>Frankenstein; or, The Modern Prometheus</td>
                    <td>1818</td>
                    <td>9781530278442</td>
                </tr>
                <tr>
                    <td>Herman Melville</td>
                    <td>Moby-Dick; or, The Whale</td>
                    <td>1851</td>
                    <td>9781530697908</td>
                </tr>
                <tr>
                    <td>Emma Dorothy Eliza Nevitte Southworth</td>
                    <td>The Hidden Hand</td>
                    <td>1888</td>
                    <td>9780813512969</td>
                </tr>
                <tr>
                    <td>F. Scott Fitzgerald</td>
                    <td>The Great Gatsby</td>
                    <td>1925</td>
                    <td>9780743273565</td>
                </tr>
                <tr>
                    <td>George Orwell</td>
                    <td>Nineteen Eighty-Four</td>
                    <td>1948</td>
                    <td>9780451524935</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
                <tr>
                    <td>Nnedi Okorafor</td>
                    <td>Who Fears Death</td>
                    <td>2010</td>
                    <td>9780756406691</td>
                </tr>
            </tbody>
        </table>
    );
}
