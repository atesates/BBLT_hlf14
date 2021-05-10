#!/bin/bash
# monitor the docker images

PREFIX="1chan_2orgs_2peers_andpolicy_10users"
i=0

echo 'Test Starts' > ${PREFIX}_docker_stats.csv
while [ $i -lt 170 ]
do
	docker stats --no-stream | awk 'NR==1{print $3","$4$5","$6$7","$9","$10$11","$12$13","$14$15}NR!=1{print $2","$3","$4","$6","$7","$8","$10","$11","$13}' >> ${PREFIX}_docker_stats.csv
	date +"Timestamp,%s" >> ${PREFIX}_docker_stats.csv
	#sleep 1
	i=$(( $i + 1 ))
done
