import Fastify from "fastify";

import {PrismaClient} from '@prisma/client'

const app = Fastify();

app.get('/', () => {
    return 'Started';
})


app.listen({
    port: 3333,
}).then(()=> {
    console.log('Server running at port 3333')
})