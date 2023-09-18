import database from '../services/database.js';
// Purpose: to provide mock data for the table component

// These are the column headers for the table
const columns = ["Tag", "Category", "Available"];

// This is the data for the table
async function getData() {
    const equipment = await database.find('equipment');

    const data = equipment.map((item) => {
        return [item.tag, item.category, item.available];
    });
    return data;
};

// These are the options for the table
const sortable = true;
const searchable = true;
const filterable = true;

// This is compiling the data into a single object
const tableData = {
    columns,
    data: await getData(),
    sortable,
    searchable,
    filterable,
};

// This is exporting the object as a module to be imported elsewhere
export default tableData;

/* This is how this JSON object will look once exported
{
    columns: [
        "Name",
        "Age",
        "Occupation"
    ],
    data: [
        [
            "John",
            25,
            "Engineer"
        ],
        [
            "Jane",
            30,
            "Doctor"
        ],
        [
            "Doe",
            20,
            "Student"
        ],
        [
            "Smith",
            28,
            "Designer"
        ]
    ],
    sortable: true,
    searchable: true,
    filterable: true
}
*/