/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("001kp8k9gwt7cqa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "alz3kgeg",
    "name": "attachments",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("001kp8k9gwt7cqa")

  // remove
  collection.schema.removeField("alz3kgeg")

  return dao.saveCollection(collection)
})
