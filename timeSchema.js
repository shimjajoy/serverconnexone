/**
 * Defined time schema
 */
const timeSchema = {
    "properties": {
        "epoch": {
            "description": "The current server time, in epoch seconds, at time of processing the request.",
            "type": "number"
        }
    },
    "required": ["epoch"],
    "type": "object"
}

module.exports = timeSchema;
