import './App.css';
import Table from './components/Table';
import React from "react";
import Button from "./components/HTMLElements/Button";


function App() {
    const cells = [
        {
            name: 'Name',
            key: 'name',
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
            name: 'Description',
            key: 'description',
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
            name: 'Weight',
            key: 'weight',
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
            name: 'Diet',
            key: 'diet',
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
            name: 'Controls',
            key: 'controls',

            render: (row) => {
                const onClickButton1 = () => {
                    if(!!row.id) {
                        handleEdit();
                    } else {
                        handleSave();
                    }
                }

                const onClickButton2 = () => {
                    if(!!row.id) {
                        handleDelete();
                    } else {
                        handleCancel();
                    }
                }

                const handleEdit = () => {
                    console.log("edit");
                }

                const handleSave = () => {
                    console.log("save");
                }

                const handleDelete = () => {
                    console.log("delete");
                }

                const handleCancel = () => {
                    console.log("cancel");
                }


                return (
                    <div>
                        <Button /*isActive={isActive}*/ text='Edit' onClick={onClickButton1} className='editButton'/>
                        <Button text='Delete' onClick={onClickButton2} className='deleteButton'/>
                    </div>
                );
            }
        }
    ];
  return (
    <div className="App">
      <Table cells={cells} /*products={products}*//>
    </div>
  );
}

export default App;
