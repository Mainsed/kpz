import fs from 'fs'

const db = () => {
    const path = 'src/db/list.json'
    return {
        write: (newData) => {
            let data = JSON.parse(fs.readFileSync(path).toString())
            console.log(data)
            data = [...data, newData];
            console.log(data)
            fs.writeFileSync(path, JSON.stringify(data, null, '  '))
            return data;
        },
        read: () => {
            return fs.readFileSync(path).toString();
        },

    }
}
export default db();