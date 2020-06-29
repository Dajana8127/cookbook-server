# curl "http://localhost:4741/songs/${ID}" \
#   --include \
#   --request PATCH \
#   --header "Authorization: Bearer ${TOKEN}" \
#   --data '{
#     "song": {
#       "title": "'"${TITLE}"'",
#       "artist": "'"${ARTIST}"'"
#     }
#   }'
