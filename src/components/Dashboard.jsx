import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Plus, X, ShoppingBasket, Trash2 } from "lucide-react"
import AddNewList from "./AddNewList"

const Dashboard = ({ onLogout }) => {
  const [categories, setCategories] = useState(["Fruits", "Vegetables"])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isAddingCategory, setIsAddingCategory] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState("")
  const [lists, setLists] = useState([])
  const [showAddList, setShowAddList] = useState(false)

  const navigate = useNavigate()

  const handleAddCategory = (e) => {
    e.preventDefault()
    if (newCategoryName.trim() !== "") {
      setCategories([...categories, newCategoryName])
      setNewCategoryName("")
      setIsAddingCategory(false)
    }
  }

  const handleRemoveCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category))
    if (selectedCategory === category) {
      setSelectedCategory(null)
    }
  }

  const handleAddList = (title, category, items) => {
    setLists([...lists, { title, category, items }])
    setShowAddList(false)
  }

  const handleDeleteList = (title) => {
    setLists(lists.filter((list) => list.title !== title))
  }

  const handleLogout = () => {
    // Clear any user-related data from localStorage or state
    localStorage.removeItem("user")
    // You might want to clear other items as well, e.g.:
    // localStorage.clear();

    // Reset any application state if necessary
    setCategories([])
    setSelectedCategory(null)
    setLists([])

    // Call the onLogout function passed from App.jsx
    onLogout()

    // Navigate to the login page
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white min-h-screen border-r">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Categories</h2>
              <button onClick={() => setIsAddingCategory(true)} className="text-emerald-600 hover:text-emerald-700">
                <Plus className="h-5 w-5" />
              </button>
            </div>
            {isAddingCategory && (
              <div className="mb-4 bg-white rounded-lg border p-4">
                <h3 className="flex justify-between items-center text-sm font-medium mb-3">
                  New Category
                  <button onClick={() => setIsAddingCategory(false)}>
                    <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  </button>
                </h3>
                <form onSubmit={handleAddCategory} className="space-y-3">
                  <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 text-sm"
                    placeholder="Category name"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white px-3 py-2 rounded-md text-sm hover:bg-emerald-700 transition-colors"
                  >
                    Add Category
                  </button>
                </form>
              </div>
            )}
            <div className="space-y-1">
              {categories.map((category, index) => (
                <div key={index} className="flex justify-between items-center group">
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left flex-1 px-3 py-2 rounded-md hover:bg-gray-100 ${
                      selectedCategory === category ? "text-emerald-600 font-medium bg-gray-50" : ""
                    }`}
                  >
                    {category}
                  </button>
                  <button
                    onClick={() => handleRemoveCategory(category)}
                    className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity px-2"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <header className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShoppingBasket className="h-6 w-6 text-emerald-600" />
                <h1 className="text-xl font-semibold">GrocerySave</h1>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Welcome, test@nextpak.org</span>
                <button
                  onClick={handleLogout}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </header>

          {/* Main */}
          <main className="max-w-7xl mx-auto px-6 py-8">
            <div className="bg-white rounded-lg border">
              {showAddList ? (
                <AddNewList
                  onAddList={(title, category, items) => handleAddList(title, category, items)}
                  onCancel={() => setShowAddList(false)}
                />
              ) : selectedCategory ? (
                <>
                  <div className="flex justify-between items-center px-6 py-4 border-b">
                    <h2 className="text-xl font-semibold">{selectedCategory}</h2>
                    <button
                      onClick={() => setShowAddList(true)}
                      className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors flex items-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add List
                    </button>
                  </div>
                  <div className="p-6 space-y-4">
                    {lists
                      .filter((list) => list.category === selectedCategory)
                      .map((list, index) => (
                        <div key={index} className="border rounded-lg p-4 group hover:border-gray-300">
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="font-medium">{list.title}</h3>
                            <button
                              onClick={() => handleDeleteList(list.title)}
                              className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="space-y-2">
                            {list.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center gap-3">
                                <input
                                  type="checkbox"
                                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                                />
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-500 py-12">Please select a category to view lists</div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

