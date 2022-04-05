cat | tr ',' ' ' | sed "s/^.*$/'&'/g" | sed 's/ /$,/' | sed 's/^/[/' | tr ' ' ',' | rev | cut -c2- | rev | sed 's/$/],/' | tr "$" "'"
