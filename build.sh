#!/bin/sh
whereami=$(pwd)
thisdir=$(dirname $0)
cd $thisdir
rm nr_synthetics_formatter.zip
zip -r nr_synthetics_formatter.zip nr_synthetics_formatter
cd $whereami
