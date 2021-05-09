import React, {ChangeEvent, useState} from "react";
import {Button} from "../../common/Button/Button";

export let SearchPack = () => {
    let array = ["один", "два", "три", "четыре", "пять"]

    const [filter, setFilter] = useState("")

    let setWord = () => {
        return array.filter((word) => {
            return word == filter ? word : "no results were found for your search"
        })
    }

    let onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value);
    }

    return <div>
        <div>
            <input
                type="text"
                name={"search"}
                onChange={onChangeSearch}
            />
        </div>
        <Button
            label={"search"}
            onClick={setWord}
            backgroundColor={'blue'}
        />
    </div>
}