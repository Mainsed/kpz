import Router from 'express'
import dbWorker from "../db/dbWorker.js";

const router = Router();

router.get('/', (req, res) => {
    const places = dbWorker.read();
    res.json({ status: 201, data: places })
})
router.put('/', (req, res) => {
    const places = dbWorker.write(req.body);
    res.json({ status: 201, data: places })
})
router.delete('/', (req, res) => {
    const places = dbWorker.delete(req.query.url)
    res.json({status: 201, data: places});
})

export default router;