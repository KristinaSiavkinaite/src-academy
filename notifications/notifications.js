var $filterCheckboxes = $('input[type="checkbox"]');
$filterCheckboxes.on('change', function() {
  var selectedFilters = {};
  $filterCheckboxes.filter(':checked').each(function() {
    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }
  selectedFilters[this.name].push(this.value);
});

var $filteredResults = $('.js-notification');
  $.each(selectedFilters, function(name, filterValues) {
    $filteredResults = $filteredResults.filter(function() {
      var matched = false,
      currentFilterValues = $(this).data('category').split(' ');

    $.each(currentFilterValues, function(_, currentFilterValue) {
      if ($.inArray(currentFilterValue, filterValues) != -1) {
        matched = true;
        return false;
      }
    });
  return matched;
  });
});

$('.js-notification').hide().filter($filteredResults).show();

});

const check = document.querySelector('.js-checked');

function toggleItemChecked(item) {
  item.classList.toggle('notifications-filter__input--checked');
}

const checkItems = document.getElementsByClassName("js-checked");
if(checkItems.length > 0 && check !== null) {
  check.onclick = function(e) {
    if(e.target.matches('.notifications-filter__input')) {
    toggleItemChecked(e.target);
    }
  }
};
