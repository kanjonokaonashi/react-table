import React, {useEffect, useState} from 'react';
import Table from "../../components/Table";
import Button from "../../components/Button";
import FormModal from "../../components/FormModal";
import {useDispatch, useSelector} from "react-redux";
import PageLoader from "../../components/PageLoader";
import {requestAction} from "./actions";

const ProductsTable = (props) => {

    // not needed now
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const cells = [
        {
            name: 'Title',
            key: 'title',
            type: 'text',
            render: function(row) {
                return (
                    <span>
                        {row[this.key]}
                    </span>
                );
            }
        },
        {
            name: 'Description',
            key: 'description',
            type: 'text',
            render: function(row) {
                return (
                    <textarea cols={100} rows={5} className="description-text" value={row[this.key]} readOnly={true}>
                    </textarea>
                );
            }
        },
        {
            name: 'Category',
            key: 'category',
            type: 'text',
            render: function(row) {
                return (
                    <span>
                        {row[this.key]}
                    </span>
                );
            }
        },
        {
            name: 'Price',
            key: 'price',
            type: 'number',
            render: function(row) {
                return (
                    <span>
                        {row[this.key]}
                    </span>
                );
            }
        },
        {
            name: 'Image',
            key: 'image',
            type: 'text',
            render: function(row) {
                return (
                    <img src={row[this.key]} alt={"" + row[this.key]}/>
                );
            }
        },
        {
            name: 'Controls',
            key: 'controls',

            render: (row) => {

                return (
                    <div>
                        <Button text={'Edit'} onClick={() => editOnClick(row)} className='editButton'/>
                        <Button text={'Delete'} onClick={() => deleteOnClick(row)} className='deleteButton'/>
                    </div>
                );
            }
        }
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestAction());
    }, [])

    const data = props.state.products.data;

    const isLoading = props.state.isLoading;

    // not needed now
    function submit(newItem) {
        if(newItem.id) {
            edit(newItem);
        } else {
            newItem.id = data.length;
            // setData( [newItem, ...data]);
            toggleModal();
        }
    }

    // not needed now
    function deleteOnClick(item) {
        let dataCopy = _.cloneDeep(data);
        setData(dataCopy.filter(item => item.id !== row.id));

        useDispatch(removeAction(item));
    }

    function editOnClick(item) {
        // setSelectedRow(item);
        // toggleModal();
    }

    function edit(newItem) { //cloning all objects with spread operator

        /*let dataCopy = _.cloneDeep(data);
        dataCopy.forEach((item, index) => {
            if(item.id === newItem.id) {
                dataCopy[index] = newItem;
            }
        })

        setData([...dataCopy]);*/
        // dispatch(editAction(newItem));
        toggleModal();
    }

    function toggleModal() {
        // setIsModalOpen(!isModalOpen);
    }

    /*
    // not needed now
    function generateRandomID() {
    let randomNumber = Math.floor(Math.random() * (99999 - 10000 + 1)) + 1;
    if(data.includes(item => {if(item.id === 'a' + randomNumber) {return true}})) {
    generateRandomID();
}
    return "a" + randomNumber;
}*/

    return (
        <div className="App">
            <h1>My spotify tracks list</h1>
            <Button text='Add a new item' onClick={toggleModal} className='addButton'/>
            <FormModal toggleModal={toggleModal} isOpen={isModalOpen} submit={submit} selectedRow={selectedRow}/>
            {isLoading ? (
                <PageLoader />
            ) : (
                <Table cells={cells} data={data || []} />
            )}
        </div>
    );
}

export default ProductsTable;