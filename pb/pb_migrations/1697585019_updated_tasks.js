/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("001kp8k9gwt7cqa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xylgdivw",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "todo",
        "inprogress",
        "codereview",
        "testing",
        "complete"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("001kp8k9gwt7cqa")

  // remove
  collection.schema.removeField("xylgdivw")

  return dao.saveCollection(collection)
})
