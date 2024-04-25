let incidencias = [
    {

            "data": []

    }
]

let id = 1

exports.addIncident = (newId, event_id, context, metadata, timestamp) => {

    const incidente = {
        event_id: event_id,
        context: context,
        metadata: metadata,
        timestamp: timestamp
    }

    incidencias[data][newId].push(incidente)

    return incidencias
}

exports.addSuceso = (event_id, context, metadata, timestamp) => {

    newId = id++

    const suceso = {
        incident_id: newId,
        incidents: []
    }

    incidencias[data].push(suceso)

    this.addIncident(newId,event_id, context, metadata, timestamp)

    return incidencias
}
