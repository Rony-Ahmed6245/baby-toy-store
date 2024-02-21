import Swal from "sweetalert2";


const AddProduct = () => {


    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const dsc = form.dsc.value;

        const formData = { name, img, rating, price, brand, dsc };
        console.log(formData);

        fetch("http://localhost:3000/v1/babyProduct", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              Swal.fire("Added successfully");
            });
        
      form.reset();
    }


    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen dark">
                <div className="w-full max-w-md bg-[#FC82BD] rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">Add Product</h2>

                    <form onSubmit={handleAddProduct} className="flex flex-wrap">
                        <input
                            required
                            name="name"
                            type="text"
                            className="bg-white text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Product Name"
                        />
                        <input
                            required
                            name="img"
                            type="text"
                            className="bg-white text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                            placeholder="Image URL"
                        />
                        <input
                            required
                            name="rating"
                            type="number"
                            max={5} min={1}
                            className="bg-white  text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Rating"
                        />
                        <input
                            required
                            name="price"
                            type="number"
                            className="bg-white text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                            placeholder="Price"
                        />
                        <input
                            required
                            name="brand"
                            type="text"
                            className="bg-white text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full  "
                            placeholder="Brand Name"
                        />

                        <textarea
                            required
                            type='text'
                            name="dsc"
                            className="bg-white text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                            placeholder="Product Details....."
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-gradient-to-r w-full from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;