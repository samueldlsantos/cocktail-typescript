const Form = () => {
  return (
    <div className="rounded-md bg-orange-500 p-10 md:w-1/2">
        <form className="space-y-10">
            <div className="space-y-5">
            <label htmlFor="name" className="block text-white uppercase font-bold">Nombre o ingredientes</label>
            <input type="text" name="name" id="name" className="p-2 rounded-md w-full" />
            </div>
            <div className="space-y-5">
            <label htmlFor="category" className="block text-white uppercase font-bold">Categoria</label>
            <select name="category" id="category" className="p-2 rounded-md w-full">
                <option value="">-- Seleccione --</option>

            </select>
            </div>

            <input type="submit" value="Buscar" className="p-2 uppercase  font-bold bg-red-700 w-full rounded-md text-white hover:bg-red-800 hover:cursor-pointer"/>

        </form>
    </div>
  )
}

export default Form