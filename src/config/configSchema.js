const configSchema = {
    "type": "object",
    "properties": {
        "server": {
            "type": "object",
            "properties": {
                "port": {
                    "type": "string"
                },
                "logLevel": {
                    "type": "string"
                }
            },
            "required": [
                "port",
                "logLevel"
            ]
        },
        "awsS3": {
                    "type": "object",
                    "properties": {
                        "BucketName": {
                            "type": "string"
                        },
                        "accessKey": {
                            "type": "string"
                        },
                        "secretKey": {
                            "type": "string"
                        },
                        "apiVersion": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "BucketName",
                        "accessKey",
                        "secretKey",
                        "apiVersion"
                    ]
                },
        "maxPaginationSize": {
            "type": "string"
        },
        "environment": {
            "type": "string"
        },
        "mongodb": {
            "type": "object",
            "properties": {
                "baseURL": {
                    "type": "string"
                },
                "dbName": {
                    "type": "string"
                },
                "debug": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "poolSize": {
                    "type": "integer"
                }
            },
            "required": [
                "baseURL",
                "dbName",
                "debug",
                "username",
                "password",
                "poolSize"
            ]
        }
    },
    "required": [
        "server",
        "aws",
        "maxPaginationSize",
        "environment",
        "mongodb"
    ]
}

module.exports = configSchema;