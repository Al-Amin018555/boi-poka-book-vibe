import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();
  
    useEffect(() => {
        const storedReadList = getStoredList()

        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    }, [])

    return (
        <div>
            <h3 className="text-3xl my-10">Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read: {readList.length}</h2>
                    <div className='my-4 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;