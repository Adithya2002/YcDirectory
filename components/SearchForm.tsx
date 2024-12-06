import Form from "next/form";
import SearchFormReset from "../components/SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({query}:{query?:string}) => {

    return (
        <>
            <Form
                action="/"
                scroll={false}
                className="search-form"
            >
                <input
                    name="query"
                    type="text"
                    defaultValue={query}
                    className="search-input"
                    placeholder="Search startups"
                />
                <div>
                    {query && <SearchFormReset/>}
                </div>
                <button type="submit" className="search-btn text-white">
                    <Search className="size-5"/>
                </button>
            </Form>
        </>
    )

}

export default SearchForm;