import demoService from "../services/demo.service.js";

const demoControler = {
    query: (req, res, next) => {
        console.log('req.query', req.query);
        const result = demoService.query(req.query)
        res.json({
            data: result,
        });
    },
};

export default demoControler;
