import React, { useState } from "react"
import { X, Plus, Trash2 } from "lucide-react"

const AddNewList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [listTitle, setListTitle] = useState("")
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState("")
  const [lists, setLists] = useState([])

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, { name: newItem.trim(), checked: false }])
      setNewItem("")
    }
  }

  const handleRemoveItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove))
  }

  const handleSubmit = () => {
    if (listTitle.trim() && items.length > 0) {
      const newList = {
        id: Date.now(),
        title: listTitle.trim(),
        items: items,
      }
      setLists([...lists, newList])
      handleClose()
    }
  }

  const handleClose = () => {
    setListTitle("")
    setItems([])
    setNewItem("")
    setIsModalOpen(false)
  }

  const handleDeleteList = (listId) => {
    setLists(lists.filter((list) => list.id !== listId))
  }

  const toggleItemCheck = (listId, itemIndex) => {
    setLists(
      lists.map((list) => {
        if (list.id === listId) {
          const newItems = [...list.items]
          newItems[itemIndex] = {
            ...newItems[itemIndex],
            checked: !newItems[itemIndex].checked,
          }
          return { ...list, items: newItems }
        }
        return list
      }),
    )
  }

  return (
    <div className="p-4">
      {/* Add List Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 flex items-center gap-2"
      >
        <Plus className="h-5 w-5" />
        Add List
      </button>

      {/* Lists Display */}
      <div className="mt-6 space-y-4">
        {lists.map((list) => (
          <div key={list.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{list.title}</h2>
              <button onClick={() => handleDeleteList(list.id)} className="text-gray-400 hover:text-red-500">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3">
              {list.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleItemCheck(list.id, index)}
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className={`text-gray-700 ${item.checked ? "line-through" : ""}`}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add List Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Add New List</h2>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">List Title</label>
                <input
                  type="text"
                  value={listTitle}
                  onChange={(e) => setListTitle(e.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Enter list title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Add Items</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        handleAddItem()
                      }
                    }}
                    className="flex-1 border rounded-md px-3 py-2"
                    placeholder="Item name"
                  />
                  <button
                    onClick={handleAddItem}
                    className="bg-emerald-600 text-white p-2 rounded-md hover:bg-emerald-700"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="min-h-[100px] bg-gray-50 rounded-md p-4">
                {items.length === 0 ? (
                  <p className="text-gray-500 text-center">No items added yet</p>
                ) : (
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <button onClick={() => handleRemoveItem(index)} className="text-gray-400 hover:text-red-500">
                          <X className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={!listTitle.trim() || items.length === 0}
                className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddNewList

