import Router from 'koa-router'
import getHealth from './health/health'
import { addIncident, addSuceso } from '../incidentes'

const router = new Router()

let log = []

router.get('/health', getHealth)

router.post('/api/event/threshold/:tiempo',(ctx) => {

    const {threshold} = ctx.params;
    const { event_id, context, metadata, timestamp} = ctx.request.body;

    if (!event_id || !context|| !metadata || !timestamp ){
        ctx.status = 400; 
        ctx.body = {
            "status": "NOK",
            "error_message": "One or more attributes did no came on the request"
            };
        return;
    };

    tiempo_segundos = timestamp/1000;

    if (!log.some(incidente => incidente.metadata === metadata) ){

        log.push({patente: metadata, timestamp: tiempo_segundos, })
        addSuceso(event_id, context, metadata, timestamp)
    }
    else {

        id = log.findIndex(incidente => incidente.patente == metadata)
        last_time = log[id].timestamp

        if (tiempo_segundos - last_time <= threshold){
            addIncident(event_id, context,metadata,tiempo_segundos)
            log[patente].timestamp = tiempo_segundos
        }
        else {
            log.push({patente: metadata, timestamp: tiempo_segundos})
            addSuceso(event_id, context, metadata, timestamp)
        }

    }
})


export default router
