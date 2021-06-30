export const cells = [
    {
        name: 'Name',
        key: 'name',
        type: 'text',
        render: function(row) {
            return createSpan(row[this.key]);
        }
    },
    {
        name: 'Category',
        key: 'category',
        type: 'text',
        render: function(row) {
            return createSpan(row[this.key]);
        }
    },
    {
        name: 'Description',
        key: 'description',
        type: 'text',
        render: function(row) {
            return createSpan(row[this.key]);
        }
    },
    {
        name: 'Weight',
        key: 'weight',
        type: 'number',
        render: function(row) {
            return createSpan(row[this.key]);
        }
    },
    {
        name: 'Diet',
        key: 'diet',
        type: 'text',
        render: function(row) {
            return createSpan(row[this.key]);
        }
    },
    {
        name: 'Price',
        key: 'price',
        type: 'number',
        render: function(row) {
            return createSpan(row[this.key]);
        }
    },
    {
        name: 'Controls',
        key: 'controls',
        render: (row) => {
            return (
                <div>
                    <Button />
                    <Button />
                </div>
            )
        }
    }
];